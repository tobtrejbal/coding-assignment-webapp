import React from "react"
import './Description.css';
import { Table, Container, Row, Col, Image} from 'react-bootstrap';
import { Block } from '../model/ObjectTypes';

interface DescriptionProps {
  blocks: Array<Block>
}

/**
 * Component with product description - renders "blocks" of information based on their type.
 */
export const Description = ({ blocks }: DescriptionProps) => {
  return (
    <div className="mt-5">
      <h2 className="sectionHeadline">Product description</h2>
      {(blocks || []).map((block, index) => {
        switch (block.type) {
          case 'text_block':
            return (
              <div className="block" key={index}>
                <p>{block.text}</p>
              </div>
            );
          case 'image_block':
            return (
              <div className="block w-50" key={index}>
                {<Image src={block.imgUrl} alt={block.text} fluid />}
              </div>
            );
          case 'list_block':
            return (
              <div className="block" key={index}>
                <ul>
                  {(block.items || []).map((item, indexInner) => (
                    <li key={indexInner}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          case 'img_gallery_block':
            return (
              <div className="block" key={index}>
                <Container key={index}>
                  <Row key={index}>
                    {(block.images || []).map((image, indexInner) => (
                      <Col xs={6} md={2} key={"col" + indexInner}>
                        <Image key={"img" + indexInner} src={image.imgUrl} alt={image.text} fluid />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            )
          case 'table_block':
            return (
              <div className="mt-5" key={index}>
                <Table className="table table-striped" key={index}>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(block.parameters || []).map((parameter, indexInner) => (
                      <tr key={"row" + indexInner}>
                        <td key={"name" + indexInner}>{parameter.name}</td>
                        <td key={"value" + indexInner}>{parameter.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )
          default: return null;
        }
      })}
    </div>
  );

}

export default Description