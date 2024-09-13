import { Button, View } from "react-native";
const Samplebutton = () => {
  const Fruit = () => {
    console.warn("this is a fruit");
  };
  return (
    <View style={{ width: 80 }}>
      <Button title="Click me" color="green" onPress={Fruit}></Button>
      <Button title="Click me" color="blue"></Button>
    </View>
  );
};
export default Samplebutton;
