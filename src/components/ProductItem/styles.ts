import styled from 'styled-components'
import checkImg from '../../assets/check.png'

export const Product = styled.div`
  position: relative;
  padding: 3.2rem;
  background: #fff;
  border-radius: .8rem;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.0rem;
  width: 100%;
  max-width: 30.4rem;
  transition: all 2s;

  &:hover {
    box-shadow: 0px 8px 24px 0px hsba(0, 0%, 0%, 0,08);
  }

  svg {
    position: absolute;
    right: 3.2rem;
    top: 3.2rem;
    cursor: pointer;
    z-index: 2;

    path {
      transition: all .2s;
    }

    &:active, &.added {
      path {
        fill: #FFF;
        stroke: #FFF;
      }
    }

    &:active {
      circle {
        fill: var(--red);
      }
    }

    &:hover {
      circle {
        fill: #FEE5EC;
      }

      path {
        fill: #FEE5EC;
        stroke: var(--red);
      }
    }
    &.added {
      circle {
        fill: #C22539;
      }
    }
  }

  .image {
    overflow: hidden;

    img {
      transition: all ease .35s;
      &:hover {
        transform: scale(0.9)
      }
    }
  }

  .name {
    padding-top: 3.2rem;
  }

  .price {
    padding-top: 2.4rem;

    .original, .best {
      display: block;
    }

    .original {
      text-decoration-line: line-through;
      color: #B5B5B6;
    }

    .best {
      color: var(--red);
      font-weight: 600;
      font-size: 2.0rem;
      line-height: 2.4rem;
    }
    
    .installments {
      display: inline-block;
    }
  }

  button {
    width: 100%;
    margin-top: 3.2rem;
    transition: background .35s;

    &:active {
      background: #1C6C3E;
    }
    
    &.added {
      display: flex;
      justify-content: center;
      position: relative;
      color: #1C1C1C;
      background: #A3F9B9;

      &::before {
        content: "";
        background: url(${checkImg}) no-repeat;
        background-size: cover;
        display: block;
        width: 1.8rem;
        height: 1.3rem;
        margin-right: 1.6rem;
        transform: translateY(6px)
      }
    }
  }
`

