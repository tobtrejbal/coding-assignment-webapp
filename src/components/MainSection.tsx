import React from "react"
import './MainSection.css';

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
      <div>
        <h2>Popis produktu</h2>
        {(this.props.blocks || []).map((block, index) => {
          switch (block.type) {
            case 'text_block':
              return (
                <div key={index}>
                  <h2>Text</h2>
                  <p>{block.text}</p>
                </div>
              );
            case 'image_block':
              return (
                <div key={index}>
                  <h2>Obrázek</h2>
                  <img src={block.imgUrl} />
                </div>
              );
            case 'list_block':
              return (
                <div key={index}>
                  <h2>Seznam</h2>
                  {(block.items || []).map((item, indexInner) => (
                    <li key={indexInner}>{item}</li>
                  ))}
                </div>
              )
              case 'img_gallery_block':
                return (
                  <div key={index}>
                    <h2>Galerie</h2>
                    <div className="gallery">
                      {(block.images || []).map((image, indexInner) => (
                        <img src={image.imgUrl} />
                      ))}
                    </div>
                  </div>
                )
            case 'table_block':
              return (
                <div key={index}>
                  <h2>Paramtery</h2>
                  <table className="table table-striped">
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
                  </table>
                </div>
              )
          }
        })}
      </div>
    );
  }
}

export default MainSection