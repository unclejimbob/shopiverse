<template>
  <div class="account-container">
    <div class="account-content">
      <h1>Account Information</h1>
      <div v-if="error" class="error">
        <p>Error: {{ error }}</p>
      </div>

      <p><strong>ID:</strong> {{ userAttributes.id }}</p>
      <p><strong>Authenticated:</strong> {{ userAttributes.aud }}</p>
      <p><strong>Email:</strong> {{ userAttributes.email }}</p>
      <p><strong>Role:</strong> {{ userAttributes.role }}</p>
      <p><strong>Provider:</strong> {{ userAttributes.provider }}</p>
      <p><strong>Phone:</strong> {{ userAttributes.phone || 'Not provided' }}</p>
      <p><strong>Created At:</strong> {{ userAttributes.created_at }}</p>
      <p><strong>Last signed in:</strong> {{ userAttributes.last_sign_in_at }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

interface UserAttributes {
  aud: string
  id: string | null
  email: string | null
  role: string | null
  last_sign_in_at: string | null
  provider: string | null
  phone: string | null
  created_at: string | null
}

const userAttributes = ref<UserAttributes>({
  aud: '',
  id: null,
  email: null,
  role: null,
  last_sign_in_at: null,
  provider: null,
  phone: null,
  created_at: null,
})

const error = ref<string | null>(null)
try {
  const { data, error: fetchError } = await supabase.auth.getUser()
  if (fetchError) {
    error.value = fetchError.message
  }
  else if (data?.user) {
    const { id, email, aud, phone, last_sign_in_at, app_metadata, user_metadata, created_at, role } = data.user

    // Populate the user attributes
    userAttributes.value = {
      aud,
      id,
      email: email || null,
      role: role || null,
      last_sign_in_at: last_sign_in_at || null,
      provider: app_metadata?.provider || 'Unknown', // Add provider
      phone: phone || null,
      created_at,
    }
  }
}
catch (err: any) {
  error.value = err.message
}
</script>

<style scoped>
.account-container {
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: top; /* Center content vertically */
  height: 5%;
  text-align: center;
  font-family: Arial, sans-serif;
}

.account-content {
  padding: 20px;
  max-width: 400px;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.error {
  color: red;
}

.user-info p {
  margin: 10px 0;
}
</style>
