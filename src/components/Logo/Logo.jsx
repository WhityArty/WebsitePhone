import './index.css';

function Logo({className, href, ...props}) {
  return (
    <a href={href ? href : "#"} className={className ? className : "logo"} {...props}> QPICK </a>
  )
}

export default Logo;
