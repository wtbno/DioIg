import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
export default function Home() {
  const [response] = useMediaQuery('(min-width: 500px)')
  return (
    <div
      fontFamily="Roboto,  sans-serif "
      style={{
        backgroundColor: "#FAFAFA",
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <div className="CelPhone" style={{}}>
        <img style={{ height: "90vh" }} src="./secphone.png"></img>
      </div>

      <div style={{ border: "solid 3px #5fd", width: "90%", height: "95%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "28%",
            height: "55%",
            backgroundColor: "#fff",
            border: "solid 1px #DBDBDB",
            flexDirection: "column",
            marginLeft: "3%",
          }}
        >
          <img src="./instagramlogo.png" />
          <img
            style={{ width: "100px", borderRadius: "100px" }}
            src="./profile.jpg"
          />
          <button
            style={{
              width: "50%",
              height: "5vh",
              backgroundColor: "#0095F6",
              color: "#ffffff",
              borderRadius: "5px",
              fontFamily: "Helvetica, sans-serif ",
              fontSize: "14px",
              border: "none",
            }}
          >
            Continuar como _wtfbno
          </button>
          <div>
            <div>Não é _wtfbno?</div>
            <div style={{ color: "#0095F6", fontStyle: "bolder" }}>
              Trocar de conta
            </div>
          </div>
        </div>
        <div>
          <a>Not _wtfbno?</a>
          <a>Switch accounts</a>
          or
          <a>Sing Up</a>
        </div>
        <div>
          <img style={{ width: "150px" }} src="apple.png" />
          <img style={{ width: "150px" }} src="google.png" />
        </div>
      </div>
    </div>
  );
}
