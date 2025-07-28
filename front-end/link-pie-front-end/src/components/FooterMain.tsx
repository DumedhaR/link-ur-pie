import Typography from '@mui/material/Typography';

interface FooterProps {
  logoSrc?: string | null; 
}

const Footer = ({ logoSrc }: FooterProps ) => {
  return (
  <footer className="w-full text-white py-12 mt-1" style={{backgroundColor: 'var(--color-foreground)', color: 'var(--primary-foreground)', }}>
    <div className="px-20 mx-auto mt-18 capitalize">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          {logoSrc? 
          <img src={logoSrc} alt="LUP Logo" className="w-16 h-16" /> : 
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LinkPi
          </Typography>
        }
        </div>
        <ul className="flex space-x-4" role="navigation">
          <li><a href="#" className="hover:underline" aria-label="About Us">About</a></li>
          <li><a href="#" className="hover:underline" aria-label="Privacy Policy">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline" aria-label="Contact Us">Contact</a></li>
        </ul>
      </div>
      <hr className="border-t-[1px] mx-auto" />
      <div className="mt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} LinkPi. All rights reserved.
      </div>
    </div>
  </footer>
);
}

export default Footer;
