/*import { StatusBar } from 'expo-status-bar';
import { LocalImage } from './src/LocalImage';
import { Typography } from './src/Typography';
import { RemoteImage } from './src/RemoteImage';
import { Icon } from './src/component/Icons';
import { Badge } from './src/component/Badge';
import { Button } from './src/component/Button';
import { Divider } from './src/component/Divider';
import { Spacer } from './src/component/Spacer';*/
import {  StyleSheet, Text, View } from 'react-native';
import { TabIcon } from './src/component/TabIcon';
export default function App() {
  return (
    /*<View style={styles.container}>
      <Typography color='red' fontSize={20}>이것은 텍스트 입니다.</Typography>
      <Divider/>
      <Spacer space={20}/>
      <LocalImage localAsset = {require('./assets/favicon.png')} width={50} height={50}/>
      <Divider/>
      <Spacer space={20}/>
      <RemoteImage url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWje_gjVcmi-wks5nTRnW_xv5W2l3MVnk7W1QDcZuhNg&s'} width={200} height={50}/>
      <Divider/>
      <Spacer space={20}/>
      <Icon name='home' size={20} color='red'/>
      <View>
      <Badge fontSize={20}>
        <Typography>BADGE</Typography>
      </Badge>
      <Badge fontSize={10}>
        <Icon name="home" size={50} color='black'/>
      </Badge>
      </View>
      
      <View style={{flexDirection:'row', marginTop:32}}>
      <Button onPress={()=>{console.log("Press")}}>
        <Typography>TEXT BUTTON</Typography>
      </Button>
      </View>
    </View>*/
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <TabIcon iconName="home"></TabIcon>
      <TabIcon iconName="home" visibleBadge></TabIcon>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
