import React from 'react'
import imageWeb3Desktop from '../../assets/images/image-web-3-desktop.jpg'
import ImageGamingGrowth from '../../assets/images/image-gaming-growth.jpg'
import ImageRetroPsc from '../../assets/images/image-retro-pcs.jpg'
import ImageTopLaptops from '../../assets/images/image-top-laptops.jpg'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { NewsItem } from '../NewsItem'
import { PreviewItem } from '../PreviewItem'
import './main.css'

export interface MainInterface { }

const Main: React.FC<MainInterface> = () => {
  return (
    <div className='container'>
      <section className='grid-layout'>
        <article className='introduction'>
          <div className='introduction-image'>
            <figure>
              <img src={imageWeb3Desktop} alt="Image Web 3 Desktop" />
            </figure>
          </div>
          <div className='introduction-wrapper'>
            <div className='introduction-title'>
              <h1>The Bright Future of Web 3.0?</h1>
            </div>
            <div className='introduction-content'>
              <p>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
              </p>
              <Button
                text='Read more'
                onClick={() => {
                }}
              />
            </div>
          </div>
        </article>
        <article className='preview'>
          <div className='preview-content'>
            <h2>New</h2>
            <PreviewItem
              title='Hydrogen VS Electric Cars'
              description='WIl hydrogen-fueled cars ever catch up
              to EVs?'
            />
            <Divider />
            <PreviewItem
              title='The Downsides of AI Artistry'
              description='What are the possible adverse effects of
              on-demand Al image generation?'
            />
            <Divider />
            <PreviewItem
              title='Is VC Funding Drying Up?'
              description='Private funding by VC firms is down 50%
            YOY. We take a look at what that means.'
            />
          </div>
        </article>
      </section>
      <section className='newsContainer'>
        <article className='news'>
          <NewsItem
            urlImage={ImageRetroPsc}
            numberNews='01'
            title='Reviving Retro PCs'
            description='What happens when old PCs are given modern upgrade'
          />
          <NewsItem
            urlImage={ImageTopLaptops}
            numberNews='02'
            title='Top 10 Laptops of 2022'
            description='Our best picks for various needs and budgets'
          />
          <NewsItem
            urlImage={ImageGamingGrowth}
            numberNews='03'
            title='The Growth of Gaming'
            description='How the pandemic has sparked fresh opportunities'
          />
        </article>
      </section>
    </div>
  )
}

export default Main