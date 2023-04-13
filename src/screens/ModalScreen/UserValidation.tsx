/* eslint-disable react-native/no-inline-styles */
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {window} from '../../constants';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';
import styles from './style';

const cardHeight = 269;

const UserValidation = ({
  msg,
  status,
  setIsModal,
}: {
  msg: string;
  status: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [layerShown, setLayerShown] = useState(false);
  const translateY = useSharedValue(0);
  const translateYStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const opacity = useSharedValue(0);
  const backDropStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    if (status) {
      setLayerShown(true);
      translateY.value = withTiming(-window.height);
      opacity.value = withTiming(1);
    }
    if (!status) {
      translateY.value = withTiming(0);
      opacity.value = withTiming(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const layerHandler = () => {
    setLayerShown(false);
    setIsModal(false);
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: {startY: number}) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: ({velocityY}) => {
      const windowHeight = window.height / 2;
      const cardCenter = window.height - windowHeight / 2;
      const target = cardCenter + cardHeight;
      const threshold = 50; //sınır
      const shouldReturn = Math.abs(velocityY) < threshold || velocityY < 0;

      translateY.value = withDecay({
        velocity: velocityY,
        clamp: [0, Infinity],
      });

      if (shouldReturn) {
        translateY.value = withTiming(0, {duration: 500});
      } else if (Math.abs(velocityY) > threshold) {
        translateY.value = withTiming(target, {duration: 500}, () => {
          runOnJS(layerHandler)();
        });
      }
    },
  });

  return (
    <>
      {layerShown && (
        <Animated.View
          style={[
            {
              position: 'absolute',
              zIndex: 1,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#0000009E',
            },
            backDropStyle,
          ]}
        />
      )}
      <Animated.View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            position: 'absolute',
            zIndex: 2,
            top: window.height,
            justifyContent: 'center',
            alignItems: 'center',
          },
          translateYStyle,
        ]}>
        <GestureHandlerRootView>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View
              style={[
                styles.container,
                {marginTop: window.height - cardHeight - 65},
              ]}>
              <TouchableOpacity
                onPress={() => {
                  layerHandler();
                }}>
                <View style={styles.closeLine} />
              </TouchableOpacity>
              <Image
                resizeMode="center"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{width: 73, height: 73}}
                source={require('@assets/images/error.png')}
              />
              <View style={{marginTop: 22}}>
                <Text style={styles.msgText}>{msg}</Text>
                <Text style={{textAlign: 'center'}}>
                  Gönderilen kod yanlış gibi duruyor lütfen doğru numarasını
                  girin
                </Text>
              </View>
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </Animated.View>
    </>
  );
};

export default UserValidation;
