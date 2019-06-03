import React from 'react';
import {ThemeProvider} from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";


export default () => (
  <ThemeProvider>
    <GlobalStyles/>
  </ThemeProvider>
)
