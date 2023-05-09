
import Link from 'next/link'

const Footer = ({ t }) => {
    return (
      <footer>
        <ul>
          <li onClick={() => window.open('https://twitter.com/leagueofffc')}>
            <i></i>
          </li>
          <li onClick={() => window.open('https://discord.gg/gkXar6XMcU')}>
            <i ></i>
          </li>
        </ul>
      </footer>
    )
}

export default Footer
