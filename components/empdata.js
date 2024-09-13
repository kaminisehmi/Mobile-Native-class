import { View, Text, Button } from "react-native";
import React from "react";
import Samplebutton from "./samplebutton";

const Empdata = () => {
  return (
    <View>
      <Text style={{ fontSize: 40, backgroundColor: "red" }}>
        {Getfulldetails("A", "B", "C")}
      </Text>
      <Samplebutton />
      <Samplebutton />
      <Empldata />
    </View>
  );
};
export default Empdata;

const Empldata = () => {
  const emname = "Mario";
  const id = 123;
  const email = "Mario@gmail.com";
  return (
    <View>
      <Text style={{ fontsize: 30 }}>Emp Name: {emname}</Text>
      <Text style={{ fontsize: 30 }}>Emp Email: {email}</Text>
      <Text style={{ fontsize: 30 }}> Emp ID: {id}</Text>
    </View>
  );
};
const Getfulldetails = (firstname, secondname, thirdname) => {
  return firstname + " " + secondname + " " + thirdname;
};
