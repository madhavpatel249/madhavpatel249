import React, { useState, useEffect } from 'react'

const leetcodeStyles = `
  .leetcode-section {
    padding: 0;
  }
  .leetcode-section h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    color: #1a1a1a;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  .leetcode-container {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    padding: 24px;
    border-radius: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  .leetcode-container:hover {
    border-color: #0066cc;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .stats-container {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
  .stat-item {
    flex: 1;
    min-width: 120px;
  }
  .stat-label {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 13px;
    color: #666666;
    margin-bottom: 6px;
  }
  .stat-value {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
  }
  .heatmap-section {
    margin-top: 24px;
  }
  .heatmap-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 16px;
  }
  .heatmap-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
  }
  .heatmap-row {
    display: flex;
    gap: 6px;
  }
  .heatmap-day {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .heatmap-day:hover {
    border-color: #0066cc;
    transform: scale(1.1);
  }
  .heatmap-day[data-level="0"] {
    background-color: #f5f5f5;
  }
  .heatmap-day[data-level="1"] {
    background-color: #c6e48b;
  }
  .heatmap-day[data-level="2"] {
    background-color: #7bc96f;
  }
  .heatmap-day[data-level="3"] {
    background-color: #239a3b;
  }
  .heatmap-day[data-level="4"] {
    background-color: #196127;
  }
  .heatmap-legend {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 12px;
    color: #666666;
  }
  .heatmap-legend-item {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .heatmap-legend-box {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    border: 1px solid #e0e0e0;
  }
  .loading-text {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 14px;
    color: #666666;
    text-align: center;
    padding: 20px;
  }
  .error-text {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 14px;
    color: #f44336;
    text-align: center;
    padding: 20px;
  }
  .day-tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2a2a2a;
    color: #e0e0e0;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 11px;
    white-space: nowrap;
    margin-bottom: 8px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    z-index: 1000;
  }
  .heatmap-day:hover .day-tooltip {
    opacity: 1;
  }
  .day-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #2a2a2a;
  }
`

// LeetCode GraphQL API endpoint
const LEETCODE_API = 'https://leetcode.com/graphql/'

// Replace with your LeetCode username
const LEETCODE_USERNAME = 'diamo249'

function LeetCodeActivity() {
  const [submissions, setSubmissions] = useState({})
  const [totalSolved, setTotalSolved] = useState(0)
  const [highestStreak, setHighestStreak] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchLeetCodeData()
  }, [])

  const fetchLeetCodeData = async () => {
    try {
      setLoading(true)
      setError(null)

      // LeetCode GraphQL query to get user stats and submission calendar
      const query = `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            submitStats {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
            userCalendar {
              submissionCalendar
            }
          }
        }
      `

      // Use multiple proxy options for better reliability
      const proxies = [
        'https://corsproxy.io/?',
        'https://api.allorigins.win/raw?url=',
      ]
      
      let response = null

      // Try each proxy
      for (const proxy of proxies) {
        try {
          const url = proxy === 'https://corsproxy.io/?' 
            ? `${proxy}${encodeURIComponent(LEETCODE_API)}`
            : `${proxy}${encodeURIComponent(LEETCODE_API)}`
          
          response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              query,
              variables: { username: LEETCODE_USERNAME },
            }),
          })

          if (response.ok) {
            break
          }
        } catch (err) {
          continue
        }
      }

      // If all proxies failed, try direct call
      if (!response || !response.ok) {
        try {
          response = await fetch(LEETCODE_API, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              query,
              variables: { username: LEETCODE_USERNAME },
            }),
          })
        } catch (directError) {
          console.error('All methods failed:', directError)
          throw new Error('Unable to fetch LeetCode data. The API may be blocked. Please check your username or try again later.')
        }
      }

      if (!response || !response.ok) {
        throw new Error(`HTTP error! status: ${response?.status || 'unknown'}`)
      }

      const data = await response.json()

      if (data.errors) {
        const errorMsg = data.errors[0]?.message || 'User not found or API error'
        if (errorMsg.includes('matchedUser')) {
          throw new Error(`LeetCode user "${LEETCODE_USERNAME}" not found. Please check your username.`)
        }
        throw new Error(errorMsg)
      }

      const matchedUser = data.data?.matchedUser

      if (!matchedUser) {
        throw new Error(`LeetCode user "${LEETCODE_USERNAME}" not found. Please verify your username.`)
      }

      // Get total problems solved
      if (matchedUser.submitStats?.acSubmissionNum) {
        const allProblems = matchedUser.submitStats.acSubmissionNum.find(
          stat => stat.difficulty === 'All'
        )
        if (allProblems) {
          setTotalSolved(allProblems.count)
        }
      }

      // Get submission calendar
      if (matchedUser.userCalendar?.submissionCalendar) {
        const calendarStr = matchedUser.userCalendar.submissionCalendar
        const calendar = typeof calendarStr === 'string' ? JSON.parse(calendarStr) : calendarStr
        
        // Convert string keys to numbers for proper timestamp matching
        const normalizedCalendar = {}
        Object.keys(calendar).forEach(key => {
          normalizedCalendar[parseInt(key)] = calendar[key]
        })
        
        setSubmissions(normalizedCalendar)
        
        // Calculate highest streak from calendar
        const streak = calculateHighestStreak(normalizedCalendar)
        setHighestStreak(streak)
      } else {
        setSubmissions({})
      }
    } catch (err) {
      console.error('Error fetching LeetCode data:', err)
      setError(err.message || 'Unable to load LeetCode activity. Please check your username.')
      setSubmissions({})
    } finally {
      setLoading(false)
    }
  }

  const calculateHighestStreak = (calendar) => {
    if (!calendar || Object.keys(calendar).length === 0) return 0

    // Get all timestamps and sort them
    const timestamps = Object.keys(calendar).map(Number).sort((a, b) => a - b)
    if (timestamps.length === 0) return 0

    let maxStreak = 0
    let currentStreak = 0
    let lastDate = null

    timestamps.forEach(timestamp => {
      const count = calendar[timestamp]
      if (count > 0) {
        const date = new Date(timestamp * 1000)
        const dateStr = date.toDateString()

        if (lastDate === null) {
          currentStreak = 1
        } else {
          const lastDateObj = new Date(lastDate)
          const daysDiff = Math.floor((date - lastDateObj) / (1000 * 60 * 60 * 24))
          
          if (daysDiff === 1) {
            // Consecutive day
            currentStreak++
          } else if (daysDiff > 1) {
            // Streak broken
            maxStreak = Math.max(maxStreak, currentStreak)
            currentStreak = 1
          }
          // If daysDiff === 0, same day, don't change streak
        }
        
        lastDate = date
        maxStreak = Math.max(maxStreak, currentStreak)
      }
    })

    return Math.max(maxStreak, currentStreak)
  }

  const getHeatmapData = () => {
    const days = []
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Get last 14 days (2 rows of 7)
    for (let i = 13; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      
      // Create timestamp at midnight UTC
      const dateUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      const timestamp = Math.floor(dateUTC.getTime() / 1000)
      
      // Try both timestamp formats (string and number keys)
      const count = submissions[timestamp] || submissions[timestamp.toString()] || submissions[String(timestamp)] || 0
      
      days.push({
        date,
        count: Number(count) || 0,
        timestamp,
      })
    }

    return days
  }

  const getIntensityLevel = (count) => {
    if (count === 0) return 0
    if (count === 1) return 1
    if (count >= 2 && count <= 3) return 2
    if (count >= 4 && count <= 5) return 3
    return 4
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const heatmapData = getHeatmapData()
  const row1 = heatmapData.slice(0, 7)
  const row2 = heatmapData.slice(7, 14)

  return (
    <>
      <style>{leetcodeStyles}</style>
      <section className="leetcode-section">
        <h2>LeetCode Activity</h2>
        <div className="leetcode-container">
          {loading ? (
            <div className="loading-text">Loading activity...</div>
          ) : error ? (
            <div className="error-text">{error}</div>
          ) : (
            <>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-label">Total Problems Solved</div>
                  <div className="stat-value">{totalSolved}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Highest Streak</div>
                  <div className="stat-value">{highestStreak} days</div>
                </div>
              </div>

              <div className="heatmap-section">
                <h3 className="heatmap-title">Last 14 Days</h3>
                <div className="heatmap-container">
                  <div className="heatmap-row">
                    {row1.map((day, index) => (
                      <div
                        key={index}
                        className="heatmap-day"
                        data-level={getIntensityLevel(day.count)}
                      >
                        <span className="day-tooltip">
                          {formatDate(day.date)}: {day.count} problem{day.count !== 1 ? 's' : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="heatmap-row">
                    {row2.map((day, index) => (
                      <div
                        key={index + 7}
                        className="heatmap-day"
                        data-level={getIntensityLevel(day.count)}
                      >
                        <span className="day-tooltip">
                          {formatDate(day.date)}: {day.count} problem{day.count !== 1 ? 's' : ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="heatmap-legend">
                  <span>Less</span>
                  <div className="heatmap-legend-item">
                    <span className="heatmap-legend-box" style={{ backgroundColor: '#f5f5f5' }}></span>
                  </div>
                  <div className="heatmap-legend-item">
                    <span className="heatmap-legend-box" style={{ backgroundColor: '#c6e48b' }}></span>
                  </div>
                  <div className="heatmap-legend-item">
                    <span className="heatmap-legend-box" style={{ backgroundColor: '#7bc96f' }}></span>
                  </div>
                  <div className="heatmap-legend-item">
                    <span className="heatmap-legend-box" style={{ backgroundColor: '#239a3b' }}></span>
                  </div>
                  <div className="heatmap-legend-item">
                    <span className="heatmap-legend-box" style={{ backgroundColor: '#196127' }}></span>
                  </div>
                  <span>More</span>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default LeetCodeActivity
