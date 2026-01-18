import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAuthStore, type AuthState } from '../store/authStore';
import { SignInScreen } from '../screens/auth/SignInScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';
import { SignalsScreen } from '../screens/signals/SignalsScreen';
import { CompaniesListScreen } from '../screens/companies/CompaniesListScreen';
import { CompanyDetailsScreen } from '../screens/companies/CompanyDetailsScreen';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type CompaniesStackParamList = {
  CompaniesList: undefined;
  CompanyDetails: { companyId: string };
};

type AppTabParamList = {
  SignalsTab: undefined;
  CompaniesTab: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const CompaniesStack = createNativeStackNavigator<CompaniesStackParamList>();
const AppTabs = createBottomTabNavigator<AppTabParamList>();

function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

function CompaniesStackNavigator() {
  return (
    <CompaniesStack.Navigator>
      <CompaniesStack.Screen
        name="CompaniesList"
        component={CompaniesListScreen}
        options={{ title: 'Companies' }}
      />
      <CompaniesStack.Screen
        name="CompanyDetails"
        component={CompanyDetailsScreen}
        options={{ title: 'Company details' }}
      />
    </CompaniesStack.Navigator>
  );
}

function AppTabsNavigator() {
  return (
    <AppTabs.Navigator>
      <AppTabs.Screen
        name="SignalsTab"
        component={SignalsScreen}
        options={{ title: 'Signals' }}
      />
      <AppTabs.Screen
        name="CompaniesTab"
        component={CompaniesStackNavigator}
        options={{ headerShown: false, title: 'Companies' }}
      />
    </AppTabs.Navigator>
  );
}

export function RootNavigator() {
  const isAuthenticated = useAuthStore((state: AuthState) => state.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppTabsNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
