/* eslint-disable @next/next/no-img-element */
import {
  ColorModeScript,
  Box,
  Flex,
  Image as ChakraImage,
} from '@chakra-ui/react'
import Image from 'next/image'
import { theme } from '@pages/_app'
import homeStyles from './homeStyles'
import Api from '@components/api'
import DummyApi from '@components/dummy-api'
import CustomScript from '@components/custom-script'
import sisuIllustrationBlur from '@images/OTP-Authentication-Security.svg'
import sisuIllustration from '@images/OTP-Authentication-Security.png'
import logoBlur from '@images/Genesis_logo.svg'
import logo from '@images/Genesis_logo.png'

const Home = () => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex>
        <Box
          id='background_branding_container'
          data-tenant-branding-background-color='true'
        >
          {process.env['NEXT_PUBLIC_NODE_ENV'] === 'production' ? (
            <ChakraImage
              data-tenant-branding-background='true'
              alt='sign-in sign-up illustration'
            />
          ) : (
            <Image
              src={sisuIllustration}
              alt='sign-in sign-up illustration'
              width={1000}
              height={1000}
              blurDataURL={`${sisuIllustrationBlur}`}
              placeholder='blur'
            />
          )}
        </Box>
        <Flex h='100%' w='60%' direction='column' className='panel' id='panel'>
          <table role='presentation'>
            <tbody>
              <tr>
                <td>
                  <div>
                    <div>
                      {process.env['NEXT_PUBLIC_NODE_ENV'] === 'production' ? (
                        <ChakraImage
                          data-tenant-branding-logo='true'
                          className='companyLogo'
                          alt='GenesisX logo'
                        />
                      ) : (
                        <Image
                          src={logo}
                          alt='GenesiX Logo'
                          width={100}
                          height={0}
                          style={{ width: '100px', height: 'auto' }}
                          blurDataURL={`${logoBlur}`}
                          placeholder='blur'
                        />
                      )}
                      <Api />
                      <DummyApi />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Flex>
      </Flex>

      {/* styling using styled jsx approach */}
      <style jsx>{homeStyles}</style>

      <CustomScript />
    </>
  )
}

export default Home
