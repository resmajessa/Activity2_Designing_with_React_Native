import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Ap = () => {
  return (
    <View>
     <Image source={require('./assets/iphone.png')}  style={styles.ap}/>
    </View>
  );
};

const Sau = () => {
  return (
    <View>
     <Image source={require('./assets/arrow.png')}  style={styles.sau}/>
    </View>
  );
};

const Sec = () => {
  return (
    <View>
     <Image source={require('./assets/security.png')}  style={styles.sec}/>
    </View>
  );
};

const Sim = () => {
  return (
    <View>
     <Image source={require('./assets/sim.png')}  style={styles.sim}/>
    </View>
  );
};
const Wifi = () => {
  return (
    <View>
     <Image source={require('./assets/wifi.png')}  style={styles.wifi}/>
    </View>
  );
};

const Blue = () => {
  return (
    <View>
     <Image source={require('./assets/bluetooth.png')}  style={styles.blue}/>
    </View>
  );
};

const Hot = () => {
  return (
    <View>
     <Image source={require('./assets/hotspot.png')}  style={styles.hot}/>
    </View>
  );
};

const Share = () => {
  return (
    <View>
     <Image source={require('./assets/share.png')}  style={styles.share}/>
    </View>
  );
};

const Multi = () => {
  return (
    <View>
     <Image source={require('./assets/multi.png')}  style={styles.multi}/>
    </View>
  );
};

const Lock = () => {
  return (
    <View>
     <Image source={require('./assets/lock.png')}  style={styles.lock}/>
    </View>
  );
};

const Sun = () => {
  return (
    <View>
     <Image source={require('./assets/sun.png')}  style={styles.sun}/>
    </View>
  );
};

const Sound = () => {
  return (
    <View>
     <Image source={require('./assets/sound.png')}  style={styles.sound}/>
    </View>
  );
};

const Ss = () => {
  const name = 'Settings';
  return (
    <View>
      <Text style={styles.ss}>{name}</Text>
    </View>
    );
  };

  const A=(props)=>{
    return(
      <View>
        <Text style={styles.a1}>{props.a2}</Text>
      </View>
    );
  };

  const As=(props)=>{
    return(
      <View>
        <Text style={styles.as1}>{props.as2}</Text>
      </View>
    );
  };

  const As1=(props)=>{
    return(
      <View>
        <Text style={styles.as11}>{props.as12}</Text>
      </View>
    );
  };

  const As2=(props)=>{
    return(
      <View>
        <Text style={styles.as21}>{props.as22}</Text>
      </View>
    );
  };

  const S=(props)=>{
    return(
      <View>
        <Text style={styles.s1}>{props.s2}</Text>
      </View>
    );
  };
  const Swbpc=(props)=>{
    return(
      <View>
        <Text style={styles.sw1}>{props.sw2}</Text>
      </View>
    );
  };

  const Swbpc1=(props)=>{
    return(
      <View>
        <Text style={styles.wb1}>{props.wb2}</Text>
      </View>
    );
  };

  const On=(props)=>{
    return(
      <View>
        <Text style={styles.on1}>{props.on2}</Text>
      </View>
    );
  };

  const Swbp=(props)=>{
    return(
      <View>
        <Text style={styles.sb1}>{props.sb2}</Text>
      </View>
    );
  };

  const On1=(props)=>{
    return(
      <View>
        <Text style={styles.on11}>{props.on22}</Text>
      </View>
    );
  };

  const Hs=(props)=>{
    return(
      <View>
        <Text style={styles.hs1}>{props.hs2}</Text>
      </View>
    );
  };

  const Of=(props)=>{
    return(
      <View>
        <Text style={styles.of1}>{props.of2}</Text>
      </View>
    );
  };

  const Sh=(props)=>{
    return(
      <View>
        <Text style={styles.sh1}>{props.sh2}</Text>
      </View>
    );
  };

  const Ml=(props)=>{
    return(
      <View>
        <Text style={styles.ml1}>{props.ml2}</Text>
      </View>
    );
  };

  const Lk=(props)=>{
    return(
      <View>
        <Text style={styles.lk1}>{props.lk2}</Text>
      </View>
    );
  };

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
      <View style={styles.sss}>
       <Ss/>
      </View>

      <View style={styles.asss}>
      <View>
        <Ap/>
        </View>
        <View>
        <A a2="About phone"/>
        </View>
        <View>
          <As1 as12="MUI Global 13.0.2 "/>
        </View>
       
        </View>

        <View style={styles.aa1}>
          <View>
            <Sau />
          </View>
          <View> 
            <As as2="System apps updater"/>
        </View>
        </View>
        <View style={styles.aa2}>
          <View>
            <Sec/>
          </View>
          <View>
          <As as2="Security status"/>
          </View>
        </View>
        </View>
      <View>
        <S s2=""/>
      </View>
      <View style={styles.assss}>
        <View style={styles.aa3}>
          <View>
          <Sim/>
          </View>
          <View>
          <Swbpc sw2="Sim cards & mobile networks"/>
          </View>
        </View>
        </View>
        <View style={styles.bb}>
        <View style={styles.aa4}>
          <View>
            <Wifi/>
          </View>
          <View>
          <Swbpc1 wb2="Wi-Fi"/>
          </View>
          <View>
            <On on2="Off"/>
          </View>
        </View>

        <View style={styles.aa5}>
          <View>
          <Blue/>
          </View>
          <View>
          <Swbp sb2="Bluetooth"/>
          </View>
          <View>
            <On1 on22="Off"/>
          </View>
        </View>

        <View style={styles.aa6}>
          <View>
            <Hot/>
          </View>
          <View>
            <Hs hs2="Portable Hotspot"/>
          </View>
          <View>
            <Of of2="On"/>
          </View>
        </View>
        <View style={styles.aa7}>
          <View>
            <Share/>
          </View>
          <View>
          <Hs hs2="Connection & sharing"/>
          </View>
        </View>
        </View>
        <View>
        <S s2=""/>
      </View>

      <View style={styles.bt}>
      <View style={styles.aa8}>
        <View>
          <Multi/>
        </View>
        <View>
          <Ml ml2="Multi users"/>
        </View>
      </View>

      <View style={styles.aa9}>
        <View>
          <Lock/>
        </View>
        <View>
          <Lk lk2="Lock screen"/>
        </View>
      </View>

      <View style={styles.aa0}>
        <View>
          <Sun/>
        </View>
        <View>
        <Lk lk2="Display"/>
        </View>
      </View>

      <View style={styles.aa01}>
        <View>
          <Sound/>
        </View>
        <View>
        <Lk lk2="Sound & vibration"/>
        </View>
      </View>
      </View>
        
       
      
      <StatusBar style="auto" />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   // justifyContent: 'center',
   backgroundColor: 'black'
  },
  line:{
    flexDirection: 'column'
  },
  assss:{
    flexDirection: 'column'
  },
  bt:{
    flexDirection: 'column'
  },
  ap:{
    marginRight: 25
  },
  sau:{
    marginRight: 25
  },
  sec:{
    marginRight: 25
  },
  sim:{
    marginTop: 34,
    marginRight: 25
  },
  wifi:{
    marginRight:28
  },
  multi:{
    marginRight: 25
  },
  lock:{
    marginRight: 25
  },
  sun:{
    marginRight: 25
  },
  sound:{
    marginRight: 25
  },
  ss: {
   height: 55,
   width: 380,
   fontSize: 40,
   color: 'white',
   justifyContent: 'center',
   marginTop: 60
  },
 
  a1:{
    color:'white',
    fontSize: 20,
    marginRight: 99,
    marginBottom: 25,
  },
  aa1:{
   flexDirection: 'row'
  },
  asss:{
    flexDirection: 'row'
  },
  aa2:{
    flexDirection: 'row'
  },
  aa3:{
    flexDirection: 'row',
    marginTop: 15
  },
  aa4:{
    flexDirection: 'row',
    marginRight: 67
  },
  aa5:{
    flexDirection: 'row',
    marginTop: 20,
  },
  aa6:{
    flexDirection: 'row',
    marginTop: 20
  },
  aa7:{
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 25
  },
  aa8:{
    flexDirection: 'row',
    marginTop: 50
  },
  aa9:{
    flexDirection: 'row',
    marginTop: 20
  },
  aa0:{
    flexDirection: 'row',
    marginTop: 20
  },
  aa01:{
    flexDirection: 'row',
    marginTop: 20
  },
  as1:{
    color: 'white',
    marginRight: 190,
    marginBottom: 25,
    fontSize: 20,
    //borderBottomWidth: 21,
   // borderColor: 'black'
  },
  bb:{
    
  },
  as11:{
    color:'gray',
    marginLeft: 50
  },
  on1:{
    color: 'gray',
    marginLeft: 30
  },
  on11:{
    color: 'gray',
    marginLeft: 30
  },
  of1:{
    color:'gray',
    marginLeft: 30
  },
  as21:{
    color:'white',
    fontSize: 30 
  },
  
  s1:{
    fontSize: 20,  
    borderBottomWidth: 1,
   borderColor: 'gray',
   paddingHorizontal: 167
  },
  sw1:{
    color: 'white',
    fontSize: 20,
    marginRight: 165, 
    marginBottom: 25,
    marginTop: 34
  },
  wb1:{
    color: 'white',
    fontSize: 20,
    marginRight: 190,
  },
  sb1:{
    color:'white',
    fontSize: 20,
    marginRight: 165,
    marginLeft: 25
  },
  hs1:{
    color: 'white',
    fontSize: 20,
    marginRight: 125,
    marginLeft: 25
  },
  ml1:{
    color: 'white',
    fontSize: 20,
    marginRight: 265
  },
  lk1:{
    color: 'white',
    fontSize: 20,
    
  }
});
