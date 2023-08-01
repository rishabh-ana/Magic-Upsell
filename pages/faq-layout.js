import {
  Layout,
  Page,
  TextContainer,
  Heading,
  Scrollable
} from '@shopify/polaris';
import '../client/css/AppStyle.css';

function FaqLayout() {
  return (
    <div>
    <div className="navigationMain">
      <div><p><a href="/index">Front Page</a></p></div>
      <div><p><a href="/annotated-layout">Setting</a></p></div>
      <div><p><a href="/design-layout">Design</a></p></div>
      <div><p><a href="/analytics-layout">Analytics</a></p></div>
      <div><p><a style={{'color':'#5c6ac4'}} href="/faq-layout">FAQ</a></p></div>
    </div>
    <Page>
      <TextContainer>
        <Heading>Installation</Heading>
        <p>You can refer to our <a href="http://smartecomtech.com/magic-upsell-faq/" target="_blank" rel="noopener noreferrer">installation-video</a> or follow the instruction to make the Magic Upsell run in your store.</p>
        <ul className="faq">
          <li>Go to Shopify backend > Settings > Checkout > Additional scripts.<br/><br/><img style={{'width':'100%','border':'1px solid'}} src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step1.jpg?v=1581026565"/></li><br/>
          <li>Copy the <span style={{'color':'#f47777','fontWeight':'bold'}}>following code</span>, paste it at the bottom and click save.
          <Scrollable className="code-box" shadow>
            <p>{"{{ '//"}ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js{"' | script_tag }}"}{"{{ '"}api.jquery.js{"' | shopify_asset_url | script_tag }}"}{"{% for line_item in checkout.line_items %}"}{'<span id="product-id" name={{line_item.product.id}} title={{line_item.product.handle}}></span>'}{'{% endfor %}'}{'<div id="myModal"></div>'}</p>
          </Scrollable>
          <br/><img style={{'width':'100%','border':'1px solid'}} src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step2.jpg?v=1581026565"/><br/>
          </li><br/>
          <li>Go to Magic Upsell Setting page and choose the upsell mode you want to activate. For more details, click <a href="#mode">here</a>.<br/>
          <br/><img style={{'width':'100%','border':'1px solid'}} src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step3.jpg?v=1581026565"/></li><br/>
          <li>(Optional) Create your discount code , it will be applied automatically after customers clicking 'Add to cart' through the Magic Upsell.</li>
        </ul>
      </TextContainer>
      <TextContainer>
      <br id="mode"/>
      <hr/>
        <Heading>What is the different between Dynamic and Manual Mode?</Heading>
        <p>Dynamic Mode:</p>
        <p>Upsell contains the first product in customer's cart and up to 4 <a href="#recommend-product">recommended products</a>.</p>
        <p>Manual Mode:</p>
        <p className="faq">Upsell contains selected products, which should be selected manually. Go to Magic Upsell Setting > Product picker to select up to 4 products.</p>
	      <p>If your order is imported or you are using test order, the first product will set to your store's first product.</p>
      </TextContainer>
      <TextContainer >
      <br id="recommend-product"/>
      <hr/>
        <Heading>Can I select recommended products by myself?</Heading>
        <p>You cannot select by yourself. According to Shopify, the algorithm that identifies recommended products is based on data about products that were purchased together and products with similar descriptions. It uses this data to provide a mix of those related products as recommendations for a given product.</p>
        <p>Instead, you can choose Manual Mode, which allow you to select up to 4 products by yourself.</p>
        <img style={{'width':'60%','border':'1px solid'}} src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step-products.jpg?v=1581026564"/>
      </TextContainer>
      <TextContainer>
      <br id="discount"/>
      <hr/>
        <Heading>Why is my discount code not working?</Heading>
        <p className="faq">Make sure you created discount code through Magic Upsell, otherwise we cannot recognize your discount code.</p>
        <p className="faq">If you don't need any discount for upsell, put <em>Discount value= 0, Coupon code = (add a space)</em> and click submit.</p>
        <img style={{'width':'60%','border':'1px solid'}} src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step-discount1.jpg?v=1581026564"/>
        <img style={{'width':'60%','border':'1px solid'}} src="https://cdn.shopify.com/s/files/1/0313/1447/7188/files/step-discount2.jpg?v=1581026564"/>
      </TextContainer>
      <TextContainer>
      <br/>
      <hr/>
        <Heading>Do I have to select products if I'm using Manual Mode?</Heading>
        <p>It's not mandatory. If you didn't select any, the upsell will only display the first product in customer's cart.</p>
      </TextContainer>
      <TextContainer>
      <br/>
      <hr/>
        <Heading style={{'fontSize':'2em','padding':'10px 0'}}>Why my upsell is not working?</Heading>
        <p>Add to cart might not working if your product's variant is not avaliable. Make sure you have every variant in stock.</p>
      </TextContainer>
      <TextContainer>
      <br/>
      <hr/>
        <Heading>How to disable the upsell?</Heading>
        <p className="faq">Just simply click Disable in Magic Upsell's Setting to pause all the functions. Your data will be saved so you can activate again at anytime.</p>
      </TextContainer>
      <br/>
      <br/>
    </Page>
    </div>
  );
}

export default FaqLayout;
