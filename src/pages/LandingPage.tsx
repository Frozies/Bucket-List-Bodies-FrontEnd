import React from "react";
import {Helmet} from "react-helmet-async";
import styles from "../../styles/Home.module.scss";
import {Button, IconButton} from "@material-ui/core";
import Image from "next/image";


interface Props {}

const LandingPage: React.FC<Props> = () => {
  return (
      <div>
          <Helmet>
              <title>Bucket List Bodies</title>
              <meta name="description" content="Bucket list bodies is a good place to get food from!" />
              <link rel="icon" href="/favicon.ico" />
          </Helmet>

          <div className={styles.hero} style={{
              backgroundImage: 'url(/shutterstock/hero2.jpg)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
          }}>
              <div style={{
                  background: 'linear-gradient(\n' +
                      '                        to top,\n' +
                      '                    rgba(255, 131, 195, 0.8),\n' +
                      '                    rgba(255, 255, 255, 0.5)\n' +
                      '                    )',
                  backgroundSize: 'cover',
                  width: '100vw',
                  height: '100vh',
                  position: 'absolute',
                  zIndex: 0,
                  top: 0,
                  left: 0,
              }}>

              </div>
              <h2>Bucket List Bodies</h2>

              <h1 className={styles.heroH1}>Fresh handmade meals delivered to your home</h1>

              <Button
                  onClick={(e: any) => {
                      // @ts-ignore
                      window.location = 'mailto:bucketlistbody@gmail.com';
                      e.preventDefault();
                  }}
                  fullWidth={true} variant="contained">Signup Now</Button>

              <IconButton style={{
                  position: 'absolute',
                  bottom: '10px',
                  width: '75px',
                  height: '75px'
              }} href={'#menu'}>
                  <Image src={'/down-arrow-svgrepo-com.svg'} width={'75px'} height={'75px'}/>
              </IconButton>
          </div>

          <main className={styles.container} id={"menu"}>
              <div className={styles.main}>
                  <h1>This weeks menu</h1>
                  <br/>
                  <h2>Orange ginger chicken</h2>
                  <h3>with broccoli over jasmine or cauli rice</h3>
                  <br/>
                  <br/>
                  <br/>
                  <h2>Homestyle turkey dinner</h2>
                  <h3>with vegetables and garlic or cauli mashed</h3>
                  <br/>
                  <br/>
                  <br/>
                  <h2>Eggplant parm</h2>
                  <h3>with jasmine rice or all veggies</h3>
                  <br/>
                  <br/>
                  <br/>
                  <h2>Skinny sloppy joe bowls</h2>
                  <h3>with jasmine or cauli rice and grilled veggies</h3>
              </div>
          </main>

          {/*<footer className={styles.footer}>
                // Hello World!
            </footer>*/}
      </div>
  );
};
export default LandingPage