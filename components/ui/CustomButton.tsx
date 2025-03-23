import React from "react";
import styles from "../../styles/CustomButton.module.css";

interface CustomButtonProps {
 width: number;
 children: React.ReactNode;
 onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
 [key: string]: unknown; // For rest props
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
 width, 
 children, 
 onClick, 
 ...rest 
}) => {
 return (
   <button
     className={styles.button}
     style={{ width: `${width}px` }}
     onClick={onClick}
     {...rest}
   >
     {children}
   </button>
 );
};

export default CustomButton;