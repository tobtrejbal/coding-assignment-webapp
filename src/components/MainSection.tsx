import React from "react"
import './MainSection.css';
import { Table, Container, Row, Col, Image } from 'react-bootstrap';

interface MainSectionProps {
  blocks: Array<Block>
}

interface MainSectionState {

}

interface Block {
  id: number,
  type: string,
  text?: string,
  imgUrl?: string,
  items?: Array<string>,
  parameters?: Array<Parameter>,
  images?: Array<Image>
}

interface Parameter {
  name: string,
  value: string
}

interface Image {
  text: string,
  imgUrl: string
}

/**
 * Component with product description and other info.
 */
class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  render() {
    return (
      <div className="mt-5">
        <h2 className="sectionHeadline">Popis produktu</h2>
        {(this.props.blocks || []).map((block, index) => {
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
                  {<Image src={block.imgUrl} fluid/>}
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
                          <Image key={"img" + indexInner} src={image.imgUrl} fluid />
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
                        <th>Parametr</th>
                        <th>Hodnota</th>
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
          }
        })}
      </div>
    );
  }
}

export default MainSection