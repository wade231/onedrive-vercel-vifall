import config from '../../config/site.config'

const createFooterMarkup = () => {
  return {
    __html: config.footer,
  }
}

const Footer = () => {
  return (
<div
  className="w-full p-4 text-center text-xs font-medium text-gray-400 dark:border-gray-500/30"
  style={{
    border: '1px solid gray', // Add a gray border
    borderRadius: '8px',     // Add rounded corners
    height: '6rem'           // Make the footer six times taller (adjust the value as needed)
  }}
  dangerouslySetInnerHTML={createFooterMarkup()}
></div>

  )
}

export default Footer
