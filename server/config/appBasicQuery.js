import gql from "graphql-tag";

export const GET_SHOP_ID = gql`
  query {
    shop {
      id
    }
  }
`;

export const CREATE_DISCOUNT = gql`
  mutation discountCodeBasicCreate(
    $basicCodeDiscount: DiscountCodeBasicInput!
  ) {
    discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
      codeDiscountNode {
        id
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;

export const DELETE_SCRIPT = gql`
  mutation scriptTagDelete($id: ID!) {
    scriptTagDelete(id: $id) {
      deletedScriptTagId
      userErrors {
        field
        message
      }
    }
  }
`;

export const CREATE_SCRIPT = gql`
  mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const SEARCH_ORDERS_UPSELL = gql`
  query ($query: String) {
    orders(first: 100, query: $query) {
      edges {
        node {
          totalPriceSet {
            presentmentMoney {
              amount
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_ORDERS_TOTAL = gql`
  query ($query: String) {
    orders(first: 100, query: $query) {
      edges {
        node {
          totalPriceSet {
            presentmentMoney {
              amount
            }
          }
        }
      }
    }
  }
`;

export const CREATE_RECURRING = gql`
  mutation appSubscriptionCreate(
    $name: String!
    $lineItems: [AppSubscriptionLineItemInput!]!
    $returnUrl: URL!
    $trialDays: Int
  ) {
    appSubscriptionCreate(
      name: $name
      lineItems: $lineItems
      returnUrl: $returnUrl
      trialDays: $trialDays
      test: true
    ) {
      appSubscription {
        id
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }
`;

export const GET_PRODUCTS_BY_ID = gql`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;
