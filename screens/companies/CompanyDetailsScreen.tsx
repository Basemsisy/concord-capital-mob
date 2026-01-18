import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CompaniesStackParamList = {
  CompaniesList: undefined;
  CompanyDetails: { companyId: string };
};

type Props = NativeStackScreenProps<CompaniesStackParamList, 'CompanyDetails'>;

export function CompanyDetailsScreen({ route }: Props) {
  const { companyId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Company details</Text>
      <Text style={styles.value}>Company id: {companyId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  value: {
    fontSize: 16,
  },
});

