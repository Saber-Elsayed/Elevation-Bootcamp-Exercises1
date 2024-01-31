import React from "react";
export function Card(props) {
  return <div className="Card">{props.children}</div>;
}

export function CardHeader(props) {
  return <div className="CardHeader">{props.children}</div>;
}
export function CardContent(props) {
  return <div className="CardContent">{props.children}</div>;
}
export function CardFooter(props) {
  return <div className="CardFooter">{props.children}</div>;
}
