const footerStyles = `
  .footer {
    padding: 16px 24px;
    margin-top: 16px;
    border-top: 1px solid var(--border);
    text-align: center;
    opacity: 1;
  }
  .footer-text {
    font-size: 14px;
    color: var(--text-light);
  }
  @media (max-width: 768px) {
    .footer {
      padding: 30px 20px;
      margin-top: 16px;
    }
    .footer-text {
      font-size: 13px;
    }
  }
`

function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
            <footer className="footer">
                <p className="footer-text">
                    © {new Date().getFullYear()} Madhav Patel. Built with React.
                </p>
      </footer>
    </>
  )
}

export default Footer
