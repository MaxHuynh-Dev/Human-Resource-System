import { Container } from '@Components/Container';
import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import Text from '@Components/Typo';
import { ROUTER } from '@Constants/router';
import Link from 'next/link';
import type React from 'react';

function Header(): React.ReactElement {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <Container>
        <div className="py-[25px] flex justify-between items-center">
          <Link href="/" className="w-[148px] h-[63px]">
            <ImagePlaceHolder 
              src="/images/logo.png" 
              alt="Logo" 
              width={148} 
              height={63}
              className="w-full h-full object-contain"
            />
          </Link>
          <ul className="flex items-center gap-[50px]">
            {ROUTER.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Text Comp={'label'} size={18} color="black">
                    {item.label}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Header;
