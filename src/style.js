
export const styles = {
    nav: (isHovered)=> ({
      display: 'flex',
      flexDirection: 'row',
      
      
      alignItems: 'baseline',
      
      backgroundColor: isHovered ?'#ffffff' : "#000000",
      color: isHovered ? '#000000': '#ffffff',
      // border: ".1rem solid #540344",
      padding: '1rem',
     
    }),
    logo: (isHovered) => ( { 
      flex: 1,
      color: isHovered ?'black': 'white',
      fontSize: '3rem',
      fontWeight: 'bold',
      
    }),
    navItems: {
      listStyle: 'none',
      display: 'flex',
      flexWrap:'wrap',
      justifyContent: 'center',
      gap: '1rem',
      maxWidth: '100%',
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      
    },
    navItem: (isSelected, isHovered)=>({
        color: isSelected ? '#ffffff': isHovered?'#dddddd':'#bbbbbb',
        fontWeight: isSelected ? 'bold': 'normal',
        cursor: 'pointer',
        transition: 'color 0s ease'
    }),
    navLink: {
        color: 'inherit',
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '0.5rem',
        borderRadius: '20px',
        fontSize: '2rem',
        transition: 'background-color 0.3s ease',
      },
      navLinkHover: {
        backgroundColor: '#000000',
        color: '#ffffff',
      }
  };
