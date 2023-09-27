import { METRICS } from './../../../shared/design/metrics/metrics';
import { StyleSheet } from 'react-native';
import { THEME } from '../../../shared/design/themes/theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: METRICS.width,
    height: METRICS.height,
    padding: METRICS.PADDING * 2,
    top: 80,
    // justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  containerTitle: {
    width: METRICS.width,
    padding: METRICS.PADDING *2,
  },
  titleLogin: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: THEME.COLORS.NEUTRAL[500],
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    color: THEME.COLORS.NEUTRAL[400],
    textAlign: 'left',
  },
  errorText: {
    color: THEME.COLORS.NEGATIVE[400],
  }
});