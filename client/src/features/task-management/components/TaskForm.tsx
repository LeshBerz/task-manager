import { Form, Input, Select, Button, DatePicker } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useTaskStore } from '@entities/task/store/TaskStore';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Task } from '@entities/task/model/types';

/**
 * Form data interface
 */
interface TaskFormData {
    title: string;
    description?: string;
    category: Task['category'];
    status: Task['status'];
    priority: Task['priority'];
    date: string;
}

/**
 * Form for creating/editing tasks
 */
const TaskForm: React.FC = () => {
    const { t } = useTranslation();
    const taskStore = useTaskStore();
    const navigate = useNavigate();
    const { id } = useParams();
    const { control, handleSubmit, reset } = useForm<TaskFormData>({
        defaultValues: {
            title: '',
            description: '',
            category: 'Bug',
            status: 'To Do',
            priority: 'Low',
            date: '',
        },
    });

    useEffect(() => {
        if (id) {
            const task = taskStore.getTask(id);
            if (task) {
                reset({
                    title: task.title,
                    description: task.description,
                    category: task.category,
                    status: task.status,
                    priority: task.priority,
                    date: task.date,
                });
            }
        }
    }, [id, taskStore, reset]);

    const onSubmit = (data: TaskFormData) => {
        if (id) {
            taskStore.updateTask(id, data);
        } else {
            taskStore.createTask(data);
        }
        navigate('/');
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4 dark:text-white">
                {id ? t('taskForm.edit') : t('taskForm.create')}
            </h1>
            <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
                <Form.Item label={t('taskForm.title')} required>
                    <Controller
                        name="title"
                        control={control}
                        rules={{ required: true, maxLength: 64 }}
                        render={({ field }) => <Input {...field} />}
                    />
                </Form.Item>
                <Form.Item label={t('taskForm.description')}>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => <Input.TextArea {...field} />}
                    />
                </Form.Item>
                <Form.Item label={t('taskForm.category')}>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                    { value: 'Bug', label: 'Bug' },
                                    { value: 'Feature', label: 'Feature' },
                                    { value: 'Documentation', label: 'Documentation' },
                                    { value: 'Refactor', label: 'Refactor' },
                                    { value: 'Test', label: 'Test' },
                                ]}
                            />
                        )}
                    />
                </Form.Item>
                <Form.Item label={t('taskForm.status')}>
                    <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                    { value: 'To Do', label: 'To Do' },
                                    { value: 'In Progress', label: 'In Progress' },
                                    { value: 'Done', label: 'Done' },
                                ]}
                            />
                        )}
                    />
                </Form.Item>
                <Form.Item label={t('taskForm.priority')}>
                    <Controller
                        name="priority"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                    { value: 'Low', label: 'Low' },
                                    { value: 'Medium', label: 'Medium' },
                                    { value: 'High', label: 'High' },
                                ]}
                            />
                        )}
                    />
                </Form.Item>
                <Form.Item label={t('taskForm.date')}>
                    <Controller
                        name="date"
                        control={control}
                        render={({ field }) => (
                            <DatePicker
                                {...field}
                                onChange={(date) => field.onChange(date?.toISOString())}
                            />
                        )}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {t('taskForm.save')}
                    </Button>
                    <Button className="ml-2" onClick={() => navigate('/')}>
                        {t('taskForm.cancel')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default TaskForm;