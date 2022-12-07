import React, {useEffect, useState} from "react"
import Picture from "../../../assets/images/318467061_677496900748965_6492946299611934394_n.jpg"

const HomePage = (props) => {
  const [matched, setMatched] = useState(false)

  const getMatched = async () => {
    try {
      const response = await fetch(
        `/api/v1/matched`
      );
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        throw new Error(errorMessage);
      }
      const responseBody = await response.json();
      setMatched(responseBody);
    } catch (error) {
      // alert(`There are no results for: ${props.match.params.location}. Please go back to homepage!`)
      console.error(`Error in Fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getMatched();
  }, []);
  let link
  if (matched.error) {
    link = <h1>Please Sign Up!</h1>
  } else {
    link = (<><h1>{matched.username} matched with Zi!</h1>
    <img src={Picture} className="picture"/></>)
  }
  return (
    <>
      {link}
    </>
  )
}

export default HomePage