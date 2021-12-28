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
  items?: Array<string>
}

/**
 * Component with product description and other info.
 */
class MainSection extends React.Component<MainSectionProps, MainSectionState> {
  render() {
    return (
      <div>
        <h2>Popis produktu</h2>
        {(this.props.blocks || []).map((block) => {
          switch (block.type) {
            case 'text_block':
              return (
                <div>
                  <h2>Text</h2>
                  <p>{block.text}</p>
                </div>
              );
            case 'image_block':
              return (
                <div>
                  <h2>Obrázek</h2>
                  <img src={block.imgUrl} />
                </div>
              );
            case 'list_block':
              return (
                <div>
                  <h2>Seznam</h2>
                  {(block.items || []).map((item) => (
                    <li>{item}</li>
                  ))}
                </div>
              )
          }
        })}
      </div>
    );
  }
}

export default MainSection