import swal from "sweetalert";

export function handleErrorResponse(res) {
    if (res.status === 200 && res.data) {
      swal("Error", res.data.message, "error");
    } else if (res.status === 403) {
      swal("Access Denied", "You don't have access to this resource.", "error");
    } else {
      swal("Error", "Something went wrong", "error");
    }
  }
  
  export function handleApiCallException(error) {
    console.dir(error);
    if(error && error.response && error.response.data && error.response.data.message )
        swal("Warning", error.response.data.message || "Something went wrong", "error");
    else
        swal("Warning", "Something went wrong", "error");
  }