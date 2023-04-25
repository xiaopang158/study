<template>
  <el-form ref="formRef" :model="dynamicValidateForm" label-width="120px" class="demo-dynamic">
    <el-form-item
      prop="email"
      label="邮箱"
      :rules="[
        {
          required: true,
          message: '请输入邮箱地址',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: '请输入正确的邮箱地址',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <el-input v-model="dynamicValidateForm.email" />
    </el-form-item>

    <el-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'例子' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: '必填',
        trigger: 'blur'
      }"
    >
      <el-input v-model="domain.value" />
      <el-button class="mt-2" @click.prevent="removeDomain(domain)">Delete</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">提交</el-button>
      <el-button @click="addDomain">新的例子</el-button>
      <el-button @click="resetForm(formRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: ''
    }
  ],
  email: ''
})

interface DomainItem {
  key: number
  value: string
}

/**
 * 删除
 * @param item
 */
const removeDomain = (item: DomainItem) => {
  // 查出该元素的下标进行删除
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

/**
 * 添加
 */
const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: ''
  })
}

/**
 * 提交
 * @param formEl
 */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('提交!')
    } else {
      console.log('错误提交!')
      return false
    }
  })
}

/**
 * 重置
 * @param formEl
 */
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
