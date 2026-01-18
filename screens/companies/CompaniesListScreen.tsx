import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CompaniesStackParamList = {
  CompaniesList: undefined;
  CompanyDetails: { companyId: string };
};

type Props = NativeStackScreenProps<CompaniesStackParamList, 'CompaniesList'>;

type CompanyListItem = {
  id: string;
  name: string;
  symbol: string;
};

const mockCompanies: CompanyListItem[] = [
  { id: '1', name: 'Apple Inc.', symbol: 'AAPL' },
  { id: '2', name: 'Tesla, Inc.', symbol: 'TSLA' },
  { id: '3', name: 'NVIDIA Corporation', symbol: 'NVDA' },
];

export function CompaniesListScreen({ navigation }: Props) {
  const [search, setSearch] = useState('');

  const filteredCompanies = mockCompanies.filter(company => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return true;
    }

    return (
      company.name.toLowerCase().includes(query) ||
      company.symbol.toLowerCase().includes(query)
    );
  });

  const handleSelectCompany = (companyId: string) => {
    navigation.navigate('CompanyDetails', { companyId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Companies</Text>
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search by company or symbol"
        style={styles.searchInput}
        autoCapitalize="none"
      />
      <FlatList
        data={filteredCompanies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => handleSelectCompany(item.id)}
          >
            <Text style={styles.companyName}>{item.name}</Text>
            <Text style={styles.companySymbol}>{item.symbol}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  searchInput: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
  },
  listItem: {
    paddingVertical: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '500',
  },
  companySymbol: {
    fontSize: 14,
    color: '#6b7280',
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e7eb',
  },
});

