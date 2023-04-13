/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';
import {window} from '../../constants';
import styles from './style';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

const cardHeight = 200;
const DataValidation = ({
  status,
  setStatus,
  errorMsg,
}: {
  status: boolean | undefined;
  setStatus: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  errorMsg: string;
}) => {
  const translateY = useSharedValue(0);

  const translateYStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  useEffect(() => {
    if (status !== undefined) {
      if (status) {
        translateY.value = withTiming(-(window.height / 2 + 100));
      }
      if (!status) {
        translateY.value = withTiming(0);
      }
    }
  }, [status, translateY]);
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
        translateY.value = withTiming(target, {duration: 500});
      }
    },
  });

  return (
    <>
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: window.height,
            justifyContent: 'center',
            alignItems: 'center',
            width: window.width,
          },
          translateYStyle,
        ]}>
        <GestureHandlerRootView>
          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={styles.container}>
              <Text style={{fontSize: 20}}>
                {status ? 'Başarılı' : errorMsg}
              </Text>

              <TouchableOpacity onPress={() => setStatus(false)}>
                <Text style={{fontSize: 50}}>Kapat</Text>
              </TouchableOpacity>
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </Animated.View>
    </>
  );
};

export default DataValidation;
