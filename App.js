import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from './src/ListItem';

export default function App(){
 
      const tarefas =[
          {id: '1', tarefa: 'Fazer Compras'},
          {id: '2', tarefa: 'Alimentar os cachorros'},
          {id: '3', tarefa: 'Estudar programação'},
          {id: '4', tarefa: 'Fazer 2 horas de leitura'}
      ];
 
 
  return(
    <View style={styles.container}>

    <FlatList  
    data={tarefas}
    keyExtractor={item => item.id }
    renderItem={ ({item}) => (
      <ListItem
      data={item}
      handleLeft={ () => alert('Tarefa Concluida com sucesso!')}
      handleRight={ () => alert('Tarefa Excluida com sucesso!')}
      />
    )} 
    
    ItemSeparatorComponent={ () => <Separator/> }
    />
    
    
    </View>
  );
}



const Separator =() => <View style={{flex:1, height:1, backgroundColor: '#DDD'}}></View>

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF'
  }
})
