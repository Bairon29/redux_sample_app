import { FETCH_POSTS, NEW_POST } from './types';

export const fetch_posts = () => dispatch => {
    console.log('fetch header')
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    );
}

export const createPost = (postData) => dispatch => {
    console.log('action called')
    fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        })
        )
}

//Normal way of doing the above
// export function fetch_posts(){
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: FETCH_POSTS,
//             payload: posts
//         }));
//     }
// }