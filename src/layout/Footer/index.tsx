import Text from '@/components/Typo';
import { Container, GridContainer } from '@Components/Container';
import type React from 'react';

function Footer(): React.JSX.Element {
  return (
    <div className="pt-(--spacing-section) pb-[47px]">
      <Container>
        <GridContainer>
          <div className="col-span-6 flex flex-col justify-between">
            <div className="flex flex-col gap-[30px]">
              <Text Comp={'h2'} size={64} color="black">
                CONTACTS
              </Text>
              <div className="max-w-[409px]">
                <Text Comp={'p'} size={20} color="black">
                  We are ready to share with you our design vision and lead you into the exciting
                  world of creativity.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[82px]">
              <div className="flex flex-col gap-[10px]">
                <Text Comp={'label'} size={20} color="black">
                  Address
                </Text>
                <Text Comp={'p'} size={18} color="black">
                  Address: 123 Main St, Anytown, USA
                </Text>
              </div>
              <div className="flex flex-col gap-[10px]">
                <Text Comp={'label'} size={20} color="black">
                  email
                </Text>
                <Text Comp={'p'} size={18} color="black">
                  <a href="mailto:brilini.mail.asb@gmail.com" className="text-inherit no-underline">
                    brilini.mail.asb@gmail.com
                  </a>
                </Text>
              </div>
              <div className="flex flex-col gap-[10px]">
                <Text Comp={'label'} size={20} color="black">
                  phone
                </Text>
                <div className="flex flex-col gap-[14px]">
                  <Text Comp={'p'} size={18} color="black">
                    <a href="tel:+380683650360" className="text-inherit no-underline">
                      +38 068 365 03 60
                    </a>
                  </Text>
                  <Text Comp={'p'} size={18} color="black">
                    <a href="tel:+380662304412" className="text-inherit no-underline">
                      +38 066 230 44 12
                    </a>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 pt-[243px]">
            <div className="max-w-[600px]">
              <Text Comp={'h2'} size={64} color="black">
                Let&apos;s talk about your project!
              </Text>
            </div>
          </div>
        </GridContainer>
      </Container>
    </div>
  );
}

export default Footer;
