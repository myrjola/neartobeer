import React from 'react';
import { Image, StyleSheet, TextInput, Alert, Button, Text, View } from 'react-native';
import { width, navBarHeight } from '../constants';
import icon from '../images/icon.png';

const textInputMargin = 20;

const styles = StyleSheet.create({
  appView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f47621',
    top: navBarHeight,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  icon: {
    flex: 1,
    width: width * 0.5,
  },
  subtitle: {
    textAlign: 'center',
  },
  textinput: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginHorizontal: textInputMargin,
    borderRadius: 5,
    marginVertical: textInputMargin,
    height: 100,
    width: width - (2 * textInputMargin),
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
        <Image source={icon} style={styles.icon} resizeMode={Image.resizeMode.contain} />
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
