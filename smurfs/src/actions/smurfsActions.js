import axios from "axios";

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch({type: "FETCH_SMURFS_START"});
        axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("Axios request: ", res)
            dispatch({type: "FETCH_SMURFS_SUCCESS", payload: res.data})
        })
        .catch(err => {
            console.log("Error: ", err.response)
            dispatch ({
                type: "FETCH_SMURFS_FAILURE",
                payload: `Error ${err.response.status}: ${err.response.data}`
            });
        });
    }
}

export const sendSmurfs = newSmurf => dispatch =>{
        axios.post("http://localhost:3333/smurfs", newSmurf)
        .then(res => {
            console.log("Post request success: ", res)
            dispatch({type: "POST_SMURFS_SUCCESS", payload: res.data.results})
        })
        .catch(err => {
            console.log("Post request failed: ", err.response)
            dispatch({type: "POST_SMURF_FAILURE", payload: err.response});
        })
    }
