import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { createDailyReport } from '../api/dailyReports';

const { Option } = Select;

const CreateDailyReport = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleCreateDailyReport = async (values) => {
    setLoading(true);
    try {
      await createDailyReport(values);
      message.success('Daily report created successfully!');
      form.resetFields();
    } catch (error) {
      message.error('Failed to create daily report.');
    }
    setLoading(false);
  };

  return (
    <Form
      form={form}
      onFinish={handleCreateDailyReport}
      layout="vertical"
      initialValues={{ subcontractors: [], tradeClasses: [] }}
    >
      <Form.Item
        label="Project Name"
        name="projectName"
        rules={[{ required: true, message: 'Please enter project name.' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: 'Please select date.' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Weather"
        name="weather"
        rules={[{ required: true, message: 'Please enter weather conditions.' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Subcontractors"
        name="subcontractors"
        rules={[{ required: true, message: 'Please select subcontractors.' }]}
      >
        <Select mode="multiple">
          <Option value="subcontractor1">Subcontractor 1</Option>
          <Option value="subcontractor2">Subcontractor 2</Option>
          <Option value="subcontractor3">Subcontractor 3</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Trade Classes"
        name="tradeClasses"
        rules={[{ required: true, message: 'Please select trade classes.' }]}
      >
        <Select mode="multiple">
          <Option value="electrical">Electrical</Option>
          <Option value="plumbing">Plumbing</Option>
          <Option value="carpentry">Carpentry</Option>
          <Option value="concrete">Concrete</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Description of Work Performed"
        name="descriptionOfWorkPerformed"
        rules={[
          { required: true, message: 'Please enter description of work performed.' },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Create Daily Report
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateDailyReport;

