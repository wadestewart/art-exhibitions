export const API = {
    apiKey:         '21313fcea367520d564f1b69b4b0b6cf'
}

// https://stackoverflow.com/questions/45000301/react-multiple-fetch-from-state
// For chaining fetch calls in componentDidMount, if you're into that sort of thing

// componentDidMount = () => {
//     fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getList&access_token=${API.apiKey}&page=1&per_page=100`)
//       .then(res => res.json())
//       .then(data => {
//         // console.log(data.exhibitions.map(exhibition => console.log(exhibition.id)))
//         this.setState({ exhibitions: data.exhibitions })
//         let exhibitionIDs = data.exhibitions.map(exhibition => exhibition.id)
//         console.log(exhibitionIDs[0])
//       })
//         // fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=${API.apiKey}&exhibition_id=${exhibition.id}&page=1&per_page=100`)
//         //   .then(res => res.json())
//         //   .then(data => {
//         //     this.setState({ exhibits: data.objects })
//         //   })
//       .catch(err => console.log(err))
//   }
