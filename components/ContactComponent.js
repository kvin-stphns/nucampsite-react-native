import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, Alert } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

export default class ContactComponent extends Component {
    
    static navigationOptions = {
        title: 'Contact Us'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <View>
                <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card title='contact information' wrapperStyle={{margin: 20}}>
                       <Text style={{marginBottom: 10}}>
                            1 Nucamp Way
                       </Text>
                        <Text style={{marginBottom: 10}}>
                            Seattle, WA 98001
                        </Text>
                        <Text style={{marginBottom: 10}}>
                            U.S.A.
                        </Text>
                        <Text style={{marginBottom: 10}}>
                            Phone: 1-206-555-1234
                        </Text>
                        <Text style={{marginBottom: 10}}>
                            Email: campsites@nucamp.co
                        </Text>  
                        <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                </Animatable.View>
                </ScrollView>
            </View>
        )
    }
}
