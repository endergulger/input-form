import React from "react";
import "./App.css";
import "./components/styles/RegisterScreen.css";
import ComboBox from "./components/ComboBox";
import RadioGroup from "./components/RadioGroup";
import { RegisterScreen } from "./components/RegisterScreen";
import UploadButtons from "./components/UploadButton";
import EnhancedTable from "./EnhancedTable";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <RegisterScreen />
        <br></br>
        <ComboBox />
        <br></br>
        <RadioGroup />
        <br></br>
        <UploadButtons />
      </header>
      <EnhancedTable />
    </div>
  );
}

export default App;

//Listeleme firebaseden çekilen veriyi tabloya aktarma
//Detay seçilen itemin özelliklerini görme
//Silme ve update etme(itemlerin update yapılacağı itemi kullanıcı seçicek)
//React router dom register => tablo sayfasına yönlendirmesi için
//1-register screen 2-listeleme 3-update
