import {
  Page,
  TextContainer,
  Heading,
} from '@shopify/polaris';
import '../css/AppStyle.css';

function Recommend() {
  return (
    <div>
      <hr/>
      <Heading>More Smart Ecom Tech App</Heading>
      <div className="flex-container">
        <a href="https://apps.shopify.com/magic-tiktok-pixel" target="_blank">
          <div className="flex-container-child">
            <div><img src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/tu.png?v=1584472503"/></div>
            <div>
              <h1 className="app-name">Magic TikTok Pixel</h1>
              <p>One-click TikTok Pixel Install</p>
              <img src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/5star.png?v=1583433956"/>
            </div>
          </div>
        </a>
        <a href="https://apps.shopify.com/magic-pinterest-pixel" target="_blank">
          <div className="flex-container-child">
            <div><img src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/pu.png?v=1583432078"/></div>
            <div>
              <h1 className="app-name">Magic Pinterest Pixel</h1>
              <p>One-click Pinterest conversion events tracking</p>
              <img src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/5star.png?v=1583433956"/>
            </div>
          </div>
        </a>
      </div>
	<br/>
	<a style={{'color':'#f47777','textDecoration':'none'}} href="http://smartecomtech.com/" target="_blank">Discover More Apps...</a>
    </div>
  )
}

export default Recommend;
