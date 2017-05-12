import React from 'react';
import { StyleSheet, TextInput, Alert, Button, Text, View } from 'react-native';
import { navBarHeight } from '../constants';

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    backgroundColor: '#fcbb3a',
    top: navBarHeight,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  subtitle: {
    textAlign: 'center',
  },
  textinput: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    flex: 1,
    marginHorizontal: 20,
  },
});

class AboutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const body = `message=${this.state.text}`;
    fetch('http://n2bmail.lsrodrigues.com/mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });
    Alert.alert('Message sent, thank you!');
    this.text.clear();
  }

  render() {
    return (
      <View style={styles.appView} accessibilityLabel="About the service">
        <Text style={styles.title}>
                Neartobeer
            </Text>
        <Text style={styles.subtitle}>
                Your best bet to get a cheap beer nearby
            </Text>
        <TextInput
          style={styles.textinput}
          placeholder="Send us bar/price updates or feedback!"
          multiline={true}
          underlineColorAndroid="transparent"
          ref={(el) => { this.text = el; }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <View style={styles.button}>
          <Button
            onPress={this.onButtonPress}
            title="Send"
            accessibilityLabel="Send feedback or update bar info"
          />
        </View>
      </View>
    );
  }
}


export default AboutView;

// Local Variables:
// mode: js2-jsx
// End:
