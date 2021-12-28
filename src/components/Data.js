export const productDataJSON = [
    {
      "id": 1,
      "title": "Product 1",
      "imageUrl": "https://via.placeholder.com/650x400",
      "blocks": [
        {
          "id": 1,
          "type": "text_block",
          "text": "Maecenas sollicitudin sapien eget velit blandit feugiat."
        },
        {
          "id": 2,
          "type": "image_block",
          "text": "Nulla scelerisque.",
          "imgUrl": "https://via.placeholder.com/450x300"
        },
        {
          "id": 3,
          "type": "list_block",
          "items": [
            "Pellentesque pharetra risus imperdiet neque ullamcorper, eu aliquam enim tempor.",
            "Sed eget urna vel magna blandit ullamcorper.",
            "Nulla blandit diam malesuada fermentum posuere.",
            "Aenean at sapien a lacus semper blandit a id est."
          ]
        }
      ],
      "comments": [
        {
          "id": 1,
          "productId": 1,
          "parentId": null,
          "authorName": "Brenna Stephenson",
          "dateGmt": "2021-06-15T11:46:26",
          "content": "Aliquam in dui ac magna scelerisque vehicula eget at ligula."
        },
        {
          "id": 3,
          "productId": 1,
          "parentId": 1,
          "authorName": "\nGary Bowen\n",
          "dateGmt": "2021-07-18T09:43:22",
          "content": "Cras convallis dolor vel est vehicula, sed dapibus turpis imperdiet."
        },
        {
          "id": 2,
          "productId": 1,
          "parentId": null,
          "authorName": "Seamus Gray",
          "dateGmt": "2021-03-16T11:46:26",
          "content": "Praesent condimentum enim sit amet sapien luctus vulputate et sed ipsum."
        },
        {
          "id": 4,
          "productId": 1,
          "parentId": 2,
          "authorName": "Tabitha Atkins",
          "dateGmt": "2021-03-17T11:46:26",
          "content": "In porta diam ac mauris eleifend rutrum."
        },
        {
          "id": 5,
          "productId": 1,
          "parentId": 2,
          "authorName": "Carolina Leach",
          "dateGmt": "2021-03-17T11:53:26",
          "content": "Curabitur sed turpis laoreet, aliquet tellus ut, dignissim ante."
        },
        {
          "id": 6,
          "productId": 1,
          "authorName": "Kael Mack",
          "dateGmt": "2022-03-11T11:53:26",
          "content": "Nulla efficitur nulla eget massa dignissim semper. Aenean condimentum sem viverra enim dictum tristique. Nulla rutrum, ligula at commodo eleifend, ex sem sodales magna, at maximus dui sapien a eros. Vestibulum a egestas ipsum, non luctus est. Nullam eu aliquam leo. Curabitur egestas sollicitudin urna eu aliquam. Sed non ex metus. Phasellus commodo vel metus cursus finibus. Maecenas eleifend ligula lectus, vel luctus metus tincidunt quis. Etiam ullamcorper in elit eget vehicula. In id venenatis turpis. Duis quis erat egestas, scelerisque purus a, rutrum dui. Sed lacus turpis, congue quis mollis id, cursus vitae neque."
        }
      ]
    }
  ]