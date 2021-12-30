import React from 'react';
import ReactDOM from 'react-dom';
import { screen } from '@testing-library/react';
import App from './App';
import ProductDetail from './components/ProductDetail';
import AddCommentModal from './components/AddCommentModal';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


configure({ adapter: new Adapter() });

describe('test', () => {
  test('test if load data was called when componentDidMount is called', async () => {
    // Arrange  
    // Act
    const wrapper = shallow<ProductDetail>(<ProductDetail productId={2} />)!;
    const instance = wrapper.instance()!;
    jest.spyOn(instance, 'loadData');
    await instance.componentDidMount();
    // Assert
    expect(instance.loadData).toHaveBeenCalledTimes(1);
  });

  test('test if page shows "Product not found" if there is no product for Id', async () => {
    // Arrange  
    // Act
    const wrapper = shallow<ProductDetail>(<ProductDetail productId={0} />)!;
    const instance = wrapper.instance()!;
    await instance.componentDidMount();
    console.log(wrapper.html());
    // Assert
    expect(wrapper.text().includes('Product not found')).toBe(true);
  });

  test('test if page does not show "Product not found" if there is a product for Id', async () => {
    // Arrange  
    // Act
    const wrapper = shallow<ProductDetail>(<ProductDetail productId={1} />)!;
    const instance = wrapper.instance()!;
    await instance.componentDidMount();
    //console.log(wrapper.html());
    // Assert
    expect(wrapper.text().includes('Product not found')).toBe(false);
  });

  test('if label "comment to react" is not shown if there is nothing to react', () => {

    // Arrange  
    const mockHideModal = jest.fn();
    const mockAddComment = jest.fn();
    // Act
    const wrapper = shallow<AddCommentModal>(
      <AddCommentModal show={true}
        commentToReact={""}
        onClose={mockHideModal}
        onConfirm={mockAddComment} />)!;
    // Assert
    expect(wrapper.text().includes('Comment to react')).toBe(false);
  }
  )

  test('if label "comment to react" is shown if there is something to react', () => {

    // Arrange  
    const mockHideModal = jest.fn();
    const mockAddComment = jest.fn();
    // Act
    const wrapper = shallow<AddCommentModal>(
      <AddCommentModal show={true}
        commentToReact={"Test comment"}
        onClose={mockHideModal}
        onConfirm={mockAddComment} />)!;
    // Assert
    expect(wrapper.text().includes('Comment to react')).toBe(true);
  }
  )
});
