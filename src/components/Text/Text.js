import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../../shared/theme';

export const Text10 = ({textStyle = {}, err, ...rest}) => {
  return (
    <Text {...rest} style={[style.Text10, textStyle, err && style.errStyle]} />
  );
};
export const Text11 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text11, textStyle]} />;
};

export const Text12 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text12, textStyle]} />;
};

export const Text13 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text13, textStyle]} />;
};

export const Text14 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text14, textStyle]} />;
};
export const Text15 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text15, textStyle]} />;
};

export const Text15_B = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text15_B, textStyle]} />;
};

export const Text15_M = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text15_M, textStyle]} />;
};

export const Text16 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text16, textStyle]} />;
};

export const Text16_B = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text16_B, textStyle]} />;
};

export const Text16_SB = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text16_SB, textStyle]} />;
};
export const Text16_M = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text16_M, textStyle]} />;
};

export const Text17 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text17, textStyle]} />;
};

export const Text18 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text18, textStyle]} />;
};

export const Text18_B = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text18_B, textStyle]} />;
};
export const Text18_M = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text18_M, textStyle]} />;
};
export const Text20 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text20, textStyle]} />;
};

export const Text22 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text23, textStyle]} />;
};

export const Text23 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text23, textStyle]} />;
};

export const Text24 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text24, textStyle]} />;
};

export const Text28 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text28, ...textStyle}} />;
};

export const Text30 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text30, ...textStyle}} />;
};

export const Text30_SB = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text30_SB, ...textStyle}} />;
};

export const Text32 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text32, ...textStyle}} />;
};

const style = StyleSheet.create({
  Text10: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
  Text11: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
  },
  Text12: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
  Text13: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  Text14: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  Text15: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  Text15_B: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },
  Text15_M: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
  Text16: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
  },
  Text16_B: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  Text16_SB: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  Text16_M: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  Text17: {
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
  },
  Text18: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
  },
  Text18_B: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  Text18_M: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  Text20: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
  },
  Text22: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
  },
  Text23: {
    fontSize: 23,
    fontFamily: 'Poppins-Regular',
  },
  Text24: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  Text28: {
    fontSize: 28,
    fontFamily: 'Poppins-Regular',
  },
  Text30: {
    fontSize: 30,
    fontFamily: 'Poppins-Regular',
  },
  Text30_SB: {
    fontSize: 30,
    fontFamily: 'Poppins-SemiBold',
  },
  Text32: {
    fontSize: 32,
    fontFamily: 'Poppins-Regular',
  },
  errStyle: {
    color: COLORS.error,
  },
});
