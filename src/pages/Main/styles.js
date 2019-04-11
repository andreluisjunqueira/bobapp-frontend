import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '#main-container': {
    'height': [{ 'unit': '%V', 'value': 1 }],
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center'
  },
  '#main-container form': {
    'width': [{ 'unit': 'px', 'value': 300 }],
    'display': 'flex',
    'flexDirection': 'column'
  },
  '#main-container form input': {
    'height': [{ 'unit': 'px', 'value': 48 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDD' }],
    'borderRadius': '4px',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  '#main-container form button': {
    'height': [{ 'unit': 'px', 'value': 48 }],
    'background': '#7159c1',
    'borderRadius': '4px',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'color': '#fff',
    'fontWeight': 'bold',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'cursor': 'pointer'
  },
  '#main-container form button:hover': {
    'opacity': '0.8'
  }
});
