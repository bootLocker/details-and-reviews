import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  font-weight: bold;
`;

const DescriptionContainer = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  line-height: 1.5;
`;

const P = styled.p`
  margin-top: 0;
  padding: 0;
  border: 0;
  line-height: 1.5;
`;

const Strong = styled.strong`
  margin: 0;
  padding: 0;
  border: 0;
  line-height: 1.5;
`;

const UList = styled.ul`
  line-height: 1.5;
`;

let DetailsPanel = () => {
  return (
    <DescriptionContainer>
      <div>Product #: 24300657</div>
      <Strong>An Absolute Essential</Strong>
      <P>The Nike Air Force 1 Low is inarguably one of the most essential sneakers of all time. First debuting on the basketball court in 1982, the Air Force 1 quickly became a staple of the streets where it’s remained ever since. When sneaker technology progressed and the Air Force 1 was no longer commonly found on the court, it was then adopted by the sneaker fanatics and hip-hop kids in New York City in the mid ’80s. Since then, it’s gone on to be one of the most worn shoes ever, with millions of pairs sold worldwide. With its clean, simple – yet bold – look, the amazingly comfortable Air Force 1has become a true classic. If you don’t have a pair of Air Force 1’s, can you really even call yourself a sneakerhead?</P>

      <Strong>Unlimited Possibilities</Strong>
      <P>The Air Force 1 Low is most iconic in its simple white-on-white leather colorway, but the shoe has been produced in thousands of other color combinations, materials, and special edition modifications throughout its long and illustrious life. This timeless sneaker is a style staple, so if you can’t find a pair to match your own style, you just aren’t looking hard enough. You can shop a wide variety of color and material options for the legendary sneaker at Foot Locker now.</P>

      <UList>
        <li>Leather, synthetic, or textile upper depending on the style. See each colorway for specific materials.</li>
        <li>Low-top silhouette for versatile style.</li>
        <li>Perforations on the toe box and quarter panels supply ventilation.</li>
        <li>Large Swooshes on each side and branding callouts on the tongue and heel.</li>
        <li>High-profile midsole for the shoe’s signature look.</li>
        <li>Nike Air cushioning in heel.</li>
        <li>Non-marking rubber cupsole supplies traction and durability.</li>
      </UList>
    </DescriptionContainer>
  );
};

export default DetailsPanel;